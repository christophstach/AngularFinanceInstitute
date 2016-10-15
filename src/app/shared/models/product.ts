import { Derivative } from './derivative';
import { IdentifierSet } from './identifier-set';
import { FigureSet } from './figure-set';

export class Product {
  _id: string;
  derived: Derivative;
  ids: IdentifierSet;
  figures: FigureSet;
}
