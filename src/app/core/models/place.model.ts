import { Geometry } from '../models/geometry.model';

export enum InputForSearchTypes {
  textquery,
  phonenumber
}

export interface Place {
  id: string;
  name: string;
  query: string;
  geometry: Geometry;
  link: string;
 }