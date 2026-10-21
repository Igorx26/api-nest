import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

// 1. A lógica de validação
@ValidatorConstraint({ name: 'Age', async: false })
export class AgeConstraint implements ValidatorConstraintInterface {
  validate(dt_nascimento: Date, args: ValidationArguments) {
    if (!dt_nascimento) return false;

    const [idadeMinima] = args.constraints; // Pega o número 18 que passaremos no DTO

    // Calcula a data exata de 18 anos atrás baseada no momento EXATO da requisição
    const dataLimite = new Date();
    dataLimite.setFullYear(dataLimite.getFullYear() - idadeMinima);

    // A pessoa tem que ter nascido ANTES ou EXATAMENTE na data limite
    return dt_nascimento <= dataLimite;
  }

  defaultMessage(args: ValidationArguments) {
    return `O aluno deve ter pelo menos ${args.constraints[0]} anos de idade.`;
  }
}

// 2. O Decorator que você vai usar no DTO
export function Age(
  idadeMinima: number,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [idadeMinima], // Passa a idade para dentro da constraint
      validator: AgeConstraint,
    });
  };
}
