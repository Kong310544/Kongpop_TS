//
interface Car{
    id:number,
    brand:string,
    color:string,
    distanceUsed:number,
    showcar():string,
    use():number
}

const EuropeCar : Car ={
    id:1,
    brand:"Honda",
    color?:"",
    distanceUsed:100,
    showcar: function() : string{
        return "Honda Honda Honda";
    },
    use: () => ,

}
console.log(EuropeCar.showcar());
