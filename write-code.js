//sumZero
function sumZero([N], sum) {
    x = 0;
    y = N.length - 1;
    while (x < y) {
      if (N[x] + N[y] == sum)
        return true;
      else if (N[x] + N[y] < sum)
        x++;
      return false
    }
}
  console.log(numbers([5, 2, 1, 9, 15], 6))

// runtime 2.1 ms

//Unique Characters
function uniqueCharacters(str)
{
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    return true;
}
console.log(uniqueCharacters('moonday'))

// runtime 1.2ms

//Panagram Sentence
function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

  // runtime 4.3ms

//Longest Word
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Hello everyone'));

// runtime 3.58 ms