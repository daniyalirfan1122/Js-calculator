function greet(num){
    
    var result = document.getElementById('result')

    result.value += num
}
function meet(){
    var result = document.getElementById('result')

    result.value = ''

}

function output(){
    var result = document.getElementById('result')
    result.value= eval(result.value)
}