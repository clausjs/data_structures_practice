/**
 * Implement a function to check if a linked list is a palindrome
 * 
 * Input: list
 * Output: boolean
 * Edge cases: Uneven lengths
 */

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function reverseAndClone(node) {
    let head = null;
    while (node !== null) {
        const n = new Node(node.data);
        n.next = head;
        head = n;
        node = node.next;
    }
    return head;
}

function isEqual(n1, n2) {
    while (n1 !== null && n2 !== null) {
        if (n1.data !== n2.data) {
            return false;
        }
        n1 = n1.next;
        n2 = n2.next;
    }
    return n1 == null && n2 == null;
}

function isPalindrome(node) {
    const reversedList = reverseAndClone(node);
    return isEqual(node, reversedList);
}

// Time Complexity: O(2n)
// Space Complexity: O(n)

const palindromePass1 = new Node(0);
palindromePass1.next = new Node(1);
palindromePass1.next.next = new Node(2);
palindromePass1.next.next.next = new Node(1);
palindromePass1.next.next.next.next = new Node(0);

const palindromeFail1 = new Node(1);
palindromeFail1.next = new Node(4);

console.log(
    isPalindrome(palindromePass1) === true,
    isPalindrome(palindromeFail1) === false
);
