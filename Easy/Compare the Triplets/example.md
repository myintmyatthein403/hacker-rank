### Example 1: Comparing Student Scores

Imagine you have two students, Alice and Bob, who have taken three exams. You want to compare their scores to see who performed better overall. The scores are stored in two arrays, and you want to determine how many times Alice scored higher than Bob and vice versa.

```javascript
function compareScores(aliceScores, bobScores) {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < aliceScores.length; i++) {
        if (aliceScores[i] > bobScores[i]) {
            alice++;
        } else if (aliceScores[i] < bobScores[i]) {
            bob++;
        }
    }

    return [alice, bob];
}

const aliceScores = [85, 90, 78];
const bobScores = [80, 85, 88];

const result = compareScores(aliceScores, bobScores);
console.log(result); // Output: [2, 1]
```

### Example 2: Comparing Product Ratings

Suppose you have two products, Product A and Product B, and you want to compare their ratings across three different criteria: quality, price, and durability. The ratings are stored in two arrays, and you want to determine how many times Product A is rated higher than Product B and vice versa.

```javascript
function compareRatings(productARatings, productBRatings) {
    let productA = 0;
    let productB = 0;

    for (let i = 0; i < productARatings.length; i++) {
        if (productARatings[i] > productBRatings[i]) {
            productA++;
        } else if (productARatings[i] < productBRatings[i]) {
            productB++;
        }
    }

    return [productA, productB];
}

const productARatings = [4.5, 3.8, 4.2];
const productBRatings = [4.0, 4.0, 4.5];

const result = compareRatings(productARatings, productBRatings);
console.log(result); // Output: [1, 1]

