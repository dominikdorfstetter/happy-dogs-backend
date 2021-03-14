import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

// If you validate an array of nested objects, you first need to validate if array is not a primitive array
// This is due to a bug in
// https://stackoverflow.com/questions/53786383/validate-nested-objects-using-class-validator-and-nestjs
export function IsNonPrimitiveArray(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsNonPrimitiveArray',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return Array.isArray(value) && value.reduce((a, b) => a && typeof b === 'object' && !Array.isArray(b), true);
        },
      },
    });
  };
}
