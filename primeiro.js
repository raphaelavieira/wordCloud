// config
const fontMin = 15; //px
const fontMax = 35; //px
const valueAttributeName = 'tag-value'; // tag in which we puted value
const tagsSelector = '[tag-value]'; // tags elemnts selector
const computeColor = true; // flag, if true color will be computed with size

// mechanism
const values = [];
document.querySelectorAll(tagsSelector).forEach(tag => {
  const tagValue = tag.getAttribute(valueAttributeName);
  
  values.push({
    el: tag,
    val: Number(tagValue)
  })
});

const valuesSorted = values.sort((a, b) => a.val - b.val);
const valueMax = valuesSorted[valuesSorted.length-1].val;

valuesSorted.forEach(x => {
  const { val, el } = x;
  
  const fontSize = Math.floor(
    (val/valueMax) * (fontMax-fontMin+1) + fontMin
  );
  
  if (computeColor) {
    const color = Math
    .abs(
      Math.floor(((val/valueMax) * 200) - 200)
    )
    .toString(16)
    .repeat(3); 
    
    el.style.color = `#${color}`;
  }
  
  el.style.fontSize = `${fontSize}px`;
});
