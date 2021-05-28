import {IFraction} from "./fraction";

export interface IRada{
    numberOfChambers: number;
    groups: Array<IFraction>;
    addFraction: Function;
    deleteFraction: Function;
}