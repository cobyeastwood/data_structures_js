const LinkedList = {
	// head @ Loop 1
	val: 5,
	next: {
		// head @ Loop 2
		val: 3,
		next: {
			// head @ Loop 3
			val: 10,
			next: null
		}
	}
}

function reverse(head) {
	let curr = head
	let prev = null
	let temp = null

	while (curr != null) {
		temp = curr.next // 3 | 10 | null
		curr.next = prev // null | 5 | 3
		prev = curr // 5 | 3 | 10
		curr = temp // 3 | 10 | null
	}
	return prev
}

function transverse(head) {
	let curr = head
	while (curr !== null) {
		curr.val = 100
		curr = curr.next
	}
	return curr
}
