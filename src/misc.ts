import {MonoTypeOperatorFunction, Observable, of, OperatorFunction} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

export const sampleInit = 50;
export const multiInit = 2;

/**
 * Set an attribute to an element that is a number.
 */
export function setAttributeNbr(elt: Element, name: string, value: number) {
  elt.setAttribute(name, '' + value);
}

export const sleep = (delayMs: number) => {
  return new Promise<void>((resolve: () => void) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
};

export const $ = document.querySelector.bind(document);
