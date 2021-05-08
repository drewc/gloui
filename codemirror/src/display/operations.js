import{clipPos}from"../line/pos.js";import{findMaxLine}from"../line/spans.js";import{displayWidth,measureChar,scrollGap}from"../measurement/position_measurement.js";import{signal}from"../util/event.js";import{activeElt}from"../util/dom.js";import{finishOperation,pushOperation}from"../util/operation_group.js";import{ensureFocus}from"./focus.js";import{measureForScrollbars,updateScrollbars}from"./scrollbars.js";import{restartBlink}from"./selection.js";import{maybeScrollWindow,scrollPosIntoView,setScrollLeft,setScrollTop}from"./scrolling.js";import{DisplayUpdate,maybeClipScrollbars,postUpdateDisplay,setDocumentHeight,updateDisplayIfNeeded}from"./update_display.js";import{updateHeightsInViewport}from"./update_lines.js";let nextOpId=0;export function startOperation(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++nextOpId},pushOperation(e.curOp)}export function endOperation(e){let t=e.curOp;t&&finishOperation(t,(e=>{for(let t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;endOperations(e)}))}function endOperations(e){let t=e.ops;for(let l=0;l<t.length;l++)endOperation_R1(t[l]);for(let l=0;l<t.length;l++)endOperation_W1(t[l]);for(let l=0;l<t.length;l++)endOperation_R2(t[l]);for(let l=0;l<t.length;l++)endOperation_W2(t[l]);for(let l=0;l<t.length;l++)endOperation_finish(t[l])}function endOperation_R1(e){let t=e.cm,l=t.display;maybeClipScrollbars(t),e.updateMaxLine&&findMaxLine(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<l.viewFrom||e.scrollToPos.to.line>=l.viewTo)||l.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new DisplayUpdate(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function endOperation_W1(e){e.updatedDisplay=e.mustUpdate&&updateDisplayIfNeeded(e.cm,e.update)}function endOperation_R2(e){let t=e.cm,l=t.display;e.updatedDisplay&&updateHeightsInViewport(t),e.barMeasure=measureForScrollbars(t),l.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=measureChar(t,l.maxLine,l.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(l.scroller.clientWidth,l.sizer.offsetLeft+e.adjustWidthTo+scrollGap(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,l.sizer.offsetLeft+e.adjustWidthTo-displayWidth(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=l.input.prepareSelection())}function endOperation_W2(e){let t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&setScrollLeft(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);let l=e.focus&&e.focus==activeElt();e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,l),(e.updatedDisplay||e.startHeight!=t.doc.height)&&updateScrollbars(t,e.barMeasure),e.updatedDisplay&&setDocumentHeight(t,e.barMeasure),e.selectionChanged&&restartBlink(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),l&&ensureFocus(e.cm)}function endOperation_finish(e){let t=e.cm,l=t.display,o=t.doc;if(e.updatedDisplay&&postUpdateDisplay(t,e.update),null==l.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(l.wheelStartX=l.wheelStartY=null),null!=e.scrollTop&&setScrollTop(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&setScrollLeft(t,e.scrollLeft,!0,!0),e.scrollToPos){let l=scrollPosIntoView(t,clipPos(o,e.scrollToPos.from),clipPos(o,e.scrollToPos.to),e.scrollToPos.margin);maybeScrollWindow(t,l)}let r=e.maybeHiddenMarkers,i=e.maybeUnhiddenMarkers;if(r)for(let n=0;n<r.length;++n)r[n].lines.length||signal(r[n],"hide");if(i)for(let n=0;n<i.length;++n)i[n].lines.length&&signal(i[n],"unhide");l.wrapper.offsetHeight&&(o.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&signal(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}export function runInOp(e,t){if(e.curOp)return t();startOperation(e);try{return t()}finally{endOperation(e)}}export function operation(e,t){return function(){if(e.curOp)return t.apply(e,arguments);startOperation(e);try{return t.apply(e,arguments)}finally{endOperation(e)}}}export function methodOp(e){return function(){if(this.curOp)return e.apply(this,arguments);startOperation(this);try{return e.apply(this,arguments)}finally{endOperation(this)}}}export function docMethodOp(e){return function(){let t=this.cm;if(!t||t.curOp)return e.apply(this,arguments);startOperation(t);try{return e.apply(this,arguments)}finally{endOperation(t)}}}