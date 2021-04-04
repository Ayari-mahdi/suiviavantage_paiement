import { beneficiaries_list} from './rest-config';

export async function getbeneficiaries(){
    try {
        let beneficiaries = await fetch(beneficiaries_list);
     
    let result = await beneficiaries.json();
    return result
    }
    catch(error)
    {
        throw error;
    }
}