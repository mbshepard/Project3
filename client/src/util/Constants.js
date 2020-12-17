export const TECHNIQUE_METAPHOR = 'Metaphor';
export const TECHNIQUE_PUNCH_LINE = 'Punch_line';
export const TECHNIQUE_IMAGERY = 'Imagery';

export const containerBGs = {
    [TECHNIQUE_METAPHOR]: "#2e8b57",
    [TECHNIQUE_PUNCH_LINE]: "rgba(255,105,104,0.96)",
    [TECHNIQUE_IMAGERY]: "#237aff",
}
export const nbSpace =(n)=>{
    let result = "";
 for (let index = 0; index < n; index++) {
     result = result + 
     <span>&nbsp;</span>
 }
    return  <span>&nbsp;</span> ;  
} 