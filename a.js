var courses =  {
    name: 'javascript',
    price: 1000,
    children : {
        name: 'reactjs'
    }
}
var {name: parentName,children: {name: childrenName} }= courses;
console.log(parentName)
