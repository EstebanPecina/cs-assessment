//sumZero
const nums = [-1,1,2,3,5]

function twoSum(nums, target) {
  let comp = new Map();
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
}

console.log(twoSum(nums, 0))

// O(n)

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

// O(n^2)

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

  // O(n)

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

// O(n)