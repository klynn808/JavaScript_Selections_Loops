console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++)
{
    if (i % 2 !== 0)
    console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} --- FIZZBUZZ`);
    } else if (i % 3 == 0) {
    console.log(`${i} --- FIZZ`);
    } else if (i % 5 == 0) {
    console.log(`${i} --- BUZZ`);
    } else {
    console.log(i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3a:\n==========\n");
//Exercise 1 "while" and "do/while" Loops
{
    let i = 1;

    while (i <= 100) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}   

console.log("EXERCISE 3b:\n==========\n");
{
    let i = 1;

    do {
        console.log(i);
        i += 2;
    } while (i <= 100);
}

console.log("EXERCISE 3c:\n==========\n");
//Exercise 2 "while" and "do/while" loops
{
    let i = 1;

    while (i <= 100) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} --- FIZZBUZZ`);
        } else if (i % 3 == 0) {
            console.log(`${i} --- FIZZ`);
        } else if (i % 5 ==0) {
            console.log(`${i} --- BUZZ`);
        } else {
            console.log(i);
        }
        i++;
    }
}

console.log("EXERCISE 3d:\n==========\n");
{
    let i = 1;

    do {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} --- FIZZBUZZ`);
        } else if (i % 3 == 0) {
            console.log(`${i} --- FIZZ`);
        } else if (i % 5 ==0) {
            console.log(`${i} --- BUZZ`);
        } else {
            console.log(i);
        }

        i++;
    } while (i <= 100);
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

{
    let value = Math.round((Math.random() * 500));
    let n = Math.round(Math.random() * (500 - 100) + 100);

    let i;
    for (i = 0; i <= n; i++)
    {
        if (i == value) {
            console.log(`Found Value --- ${i}`);
            break; 
        }
}

if (i > n) {
console.log("Did not find value");
}
}   

console.log("EXERCISE 5 BONUS:\n==========\n");

{
    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let start = Math.round(Math.random() * (10 - 1) + 1);
    let end = Math.round(Math.random() * (1000 - 100) + 100);

    for (let i = start; i <= end; i++)
    {
        if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
            console.log(`${i} ==== FIZZBUZZ`);
        } else if (i % fizzDivisor === 0) {
            console.log(`${i} ===== FIZZ`);
        } else if (i % buzzDivisor === 0) {
            console.log(`${i} ===== BUZZ`);
        } else {
            console.log(i);
        }
    }
}

console.log("EXERCISE 5 Function Just for Fun:\n==========\n");

{
    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let start = Math.round(Math.random() * (10 - 1) + 1);
    let end = Math.round(Math.random() * (1000 - 100) + 100);

    console.log({ start, end, fizzDivisor, buzzDivisor});

    function fizzBuzz(start, end, fizzDivisor, buzzDivisor) {
        if (fizzDivisor <= 0 || buzzDivisor <= 0) {
            console.error("Divisors must be greater than 0");
            return;
        }       
    
        for (let i = start; i <= end; i++) {
            if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
                console.log(`${i} ==== FIZZBUZZ`);
            } else if (i % fizzDivisor === 0) {
                console.log(`${i} ==== FIZZ`);
            } else if (i % buzzDivisor === 0) {
                console.log(`${i} ==== BUZZ`);
            } else {
                console.log(i);
            }
        }
    }

    fizzBuzz(start, end, fizzDivisor, buzzDivisor); 
}
