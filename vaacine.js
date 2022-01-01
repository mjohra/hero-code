function vaxTrail(trails) {
  const A = [];
  const B = [];
  const C = [];
  const D = [];
  for (const trail of trails) {
    if (trail.age >= 20 && trail.age <= 30 && trail.temperature < 100) {
      //   let category_1 = trail;
      //   console.log(trail);
      A.push(trail);
      //   console.log(A);
    } else if (trail.age >= 31 && trail.age <= 40 && trail.temperature < 100) {
      let category_2 = trail;
      B.push(category_2);

      //   console.log(B);
    } else if (trail.age >= 41 && trail.age <= 50 && trail.temperature < 100) {
      let category_3 = trail;
      C.push(category_3);
    } else if (trail.age >= 0 && trail.age <= 200 && trail.temperature >= 100) {
      let category_4 = trail;
      D.push(category_4);
    }
  }

  const result = evenSort(A);
  const result1 = evenSort(B);
  const result2 = evenSort(C);
  const result3 = evenSort(D);

  return { A, B, C, D };
}

function evenSort(persons) {
  let even = [];
  let odd = [];
  for (const person of persons) {
    if (person.age % 2 == 0) {
      even.push(person);
    } else {
      odd.push(person);
    }
  }

  even.sort(function (a, b) {
    return a.age - b.age;
  });
  odd.sort(function (a, b) {
    return a.age - b.age;
  });
  const result = odd.concat(even);
  return result;
}
console.log(
  vaxTrail([
    { name: "Biplap", age: 22, temperature: 98 },
    { name: "sunil", age: 21, temperature: 98 },
    { name: "Kabir", age: 36, temperature: 99 },
    { name: "Rahul", age: 37, temperature: 99 },
    { name: "Paul", age: 42, temperature: 98 },
    { name: "Kat", age: 41, temperature: 98 },
    { name: "Nayem", age: 50, temperature: 100 },
    { name: "Sabnaj", age: 51, temperature: 101 },
  ])
);
