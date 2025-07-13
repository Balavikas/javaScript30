Since the css only transition for 0.07s why are we adding javascript logic to remove that class.

🔍 The key point:
CSS can animate a change, but it cannot automatically remove the class after the animation is complete.

🧠 Why we use JavaScript to remove .playing
Because:
The class .playing adds styles like transform, border-color, box-shadow.

But those styles will stay applied until we remove the class manually.

If we don’t remove it, the element stays scaled and glowing forever.

✅ What JavaScript does:
js
Copy
Edit
key.classList.add('playing');         // starts the transition
...
key.addEventListener('transitionend', removeTransition);
Then:

js
Copy
Edit
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');   // resets the element
}
This removes the .playing class right after the transition ends, causing the element to return to its original state.

🎬 What happens visually:
You press a key → JS adds .playing class

CSS animates scale & border-color over 0.07s

JS waits for transitionend

Then removes .playing class

CSS animates the reverse (if needed) or snaps back

🚫 What if you don’t remove the class?
The element stays in the “pressed” state (scaled, glowing).

Repeated key presses won’t trigger transition again, because the property doesn’t change.

So it won’t look animated anymore — just stuck.

✅ In summary
Without JS removal	With JS removal
.playing stays forever	.playing goes away after animation
Button looks "stuck"	Button animates cleanly every press
No repeated animation	Works every time you press


