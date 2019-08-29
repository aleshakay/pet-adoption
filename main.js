console.log('Pet-Adoption')

const petsData = [
    {
        Image: 'https://petco.scene7.com/is/image/PETCO/849430-center-3?$ProductDetail-large$',
        Name:  'Lady',
        Color: 'Black',
        SpecialSkill: 'Playing Dead',
        TypeofPet: 'Guinea Pigs',
    },
    {
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0MlDscUz_O71qpOYXGwbWdGCCU8odlEZ2x2iD3hfNM7GW_7nKA',
        Name:  'Coconut',
        Color: 'Black',
        SpecialSkill: 'Shaking Hands',
        TypeofPet: 'Dog',   
    },
    {
        Image: 'https://www.thespruce.com/thmb/DbPcr_JQ1Ou7mOMjHQRdRme1L6w=/400x300/filters:no_upscale():max_bytes(150000):strip_icc()/summer-tanager-5abba0afae9ab80037c90e14.jpg',
        Name:  'Cougar',
        Color: 'Red',
        SpecialSkill: 'Barking',
        TypeofPet: 'Bird',   
    },
    {
        Image: 'https://thenypost.files.wordpress.com/2017/09/shutterstock_424833865.jpg?quality=90&strip=all&w=618&h=410&crop=1',
        Name:  'Flower Child',
        Color: 'Brown',
        SpecialSkill: 'Winking',
        TypeofPet: 'Guinea Pigs',
    },
    {
        Image: 'https://vetstreet-brightspot.s3.amazonaws.com/1c/854d80a8b511e0a0d50050568d634f/file/labradoodle-2-645mk070111.jpg',
        Name:  'Love',
        Color: 'White',
        SpecialSkill: 'Hugging',
        TypeofPet: 'Dog',   
    },
    {
        Image: 'https://doggiedesigner.com/wp-content/uploads/2018/07/Labradoodle-1.jpg',
        Name:  'Mud Pie',
        Color: 'Golden',
        SpecialSkill: 'Eskmo Kisses',
        TypeofPet: 'Dog',   
    }
];

const printToDom = (toPrint, divId)=>{
    document.getElementById(divId).innerHTML= toPrint
};

const animalGetter = (animalInfo)=>{
    
    let domstring = ''
    for(i = 0; i < animalInfo.length; i++){
        const animalArray = animalInfo[i]
        domstring += `<div class="animalClass">
                    <h2>${animalArray.Name}</h2>
                    <img src=${animalArray.Image} alt='Image of ${animalArray.name}' />
                    <h3>${animalArray.Color}</h3>
                    <p>${animalArray.SpecialSkill}</p>
                    <h3>${animalArray.TypeofPet}</p3>
                    </div>`
    }
    printToDom(domstring, 'petId')
}
 document.getElementById('dogButton').addEventListener('click', (e) => {
    const animal = e.target.id
    const animalSelected =[]
    for(i = 0; i < petsData.length; i++){
        const petData = petsData[i]
        if (petData.Name === animal.Name){
            animalSelected.push(petData)
        }
    }
    animalGetter(animalSelected)
})  

animalGetter(petsData)