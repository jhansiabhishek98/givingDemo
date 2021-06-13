
import { EditEventComponent } from './edit-event.component';

describe('EditEventComponent', () => {

  it('to be', () => {
    let x=10;
    expect(x).toBe(10)
  });
  it('to equal', () => {
    let x=10;
    expect(x).toEqual(10)
  });
  it('Array test to equal', () => {
    let a=[1,2,3]
    expect(a).toEqual([1,2,3])
  });
  it('Array test to contain', () => {
    let a=['abc','def','xyz']
    expect(a).toContain('def')
  });
  it('Array test to contain', () => {
    var message="This 4th lane of Underworld"
    expect(message).toMatch(/\d+/);
    expect(message).toMatch('Underworld')
  });
});
