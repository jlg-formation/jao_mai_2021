export const sampleInit = 50;
export const multiInit = 2;

/**
 * Set an attribute to an element that is a number.
 */
export function setAttributeNbr(elt: Element, name: string, value: number) {
  elt.setAttribute(name, '' + value);
}
