import { TransactionCardProps } from "../components/TransactionCard";

export type ListCardType = {
    id: string;
  } & Pick<TransactionCardProps, "name" | "type" | "category" | "date" | "value">

export function formatedValue(value: string | number) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'  
    }) 
}

export function getTotalForTypes(items:ListCardType[]){
    let totalUp = 0;
    let totalDown = 0;

    items?.forEach((item) => {
        const value = parseFloat(item.value);
        item.type === 'up' ? (totalUp += value) : (totalDown += value);
    })
    
    return {
        totalUp: formatedValue(totalUp),
        totalDown: formatedValue(totalDown),
        total: formatedValue(totalUp - totalDown),
    }
}