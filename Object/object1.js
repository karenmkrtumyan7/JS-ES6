//Create a function that builds a tree like object given an array with object which contains
//parent and id properties.

function createTree(arr, obj = {id : null}) {
    let checked = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parent === obj.id) {
            obj[arr[i].id] = {};
            obj[arr[i].id].id = arr[i].id;
            
            createTree(arr, obj[arr[i].id]);
        }

        if (i === arr.length - 1 && !checked) {
            delete obj.id;
            return obj;
        }
    }
}

console.log(createTree([{
    parent: null,
    id: 0
}, {
    parent: 0,
    id: 1
}, {
    parent: 0,
    id: 2
}, {
    parent: 1,
    id: 3
},
{
    parent: 1,
    id: 4
},{
    parent: 2,
    id: 5
},
{
    parent: 4,
    id: 6
}]));

