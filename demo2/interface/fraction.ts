import {IDept} from "./interface";


export interface IFraction {
    name: string;
    leader: IDept;
    members: Array<IDept>;
    addDept: Function;
    deleteDept: Function;
    membersOfFraction: Function;
    MoneyMakers: Function;
    TheBigMoneyMakers: Function;
}