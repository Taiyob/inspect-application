const alertFunction = () => {
    alert('Be attentive please!');
}
const seriousStudent = () =>{
    const serious = confirm('Are you spending time with coding?');
    if(serious === true){
        alert('Well Done!');
    }else{
        console.log('Its sad to us...');
    }
}
const getName = ()=> {
    const name = prompt('What is your name?');
    console.log(name);
}
