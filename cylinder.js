// Question one:
// Create an object and store the height and radius of a cylinder in it. 
// Create a function to calculate the volume andsurface area of the cylinder


let cylinder={
    height:10,
    radius:20
}
const pi=3.14
let calculate_vol_Area=((h,r) =>{
    volume=pi*r*r*h;
    Area=2*pi*r*(r+h);
    console.log(volume)
    console.log(Area)

})
calculate_vol_Area(cylinder.height,cylinder.radius)