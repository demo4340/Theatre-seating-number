var friends = prompt("Enter the number of friends : ");
var rows = prompt("Enter the number of rows : ");
var coloumns = prompt("Enter the number of coloumns : ");
var seats;
var points = [];

for (var row= 1; row <= rows; row++) {
    for (var coloumn=1; coloumn <= coloumns; coloumn++) {
        seats = "R"+row + "C" + coloumn;
        points.push(seats);
    }
    
}

print("Seat numbers")

for (var i = 0; i < friends; i++){
    console.log(points[i]);
}

