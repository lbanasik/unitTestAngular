import { StrengthPipe } from './strength.pipe';

describe('StrenghtPipe', () => {
  it('should display weak if strength is 5', () => {
    const pipe = new StrengthPipe();

    const returnedValue = pipe.transform(5);
    expect(returnedValue).toEqual('5 (weak)');

  });

  it('should display strong if strength is 10', () => {
    const pipe = new StrengthPipe();

    const returnedValue = pipe.transform(10);
    expect(returnedValue).toEqual('10 (strong)');
  });
});
