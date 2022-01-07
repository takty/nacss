/**
 *
 * Script
 *
 * @author Takuto Yanagida
 * @version 2022-01-07
 *
 */


function initialize(target) {

	// Delay

	const is  = Array.from(target.getElementsByTagName('img'));
	const tis = Array.from(target.querySelectorAll('table img'));
	const ifs = Array.from(target.getElementsByTagName('iframe'));

	NACSS.delay.applyImage(is.filter(e => !tis.includes(e)));
	NACSS.delay.applyIframe(ifs);

	// Content

	const figs = target.getElementsByTagName('figure');
	const ss   = target.getElementsByTagName('span');

	NACSS.content.applyImageAlt(is);
	NACSS.content.applyFigureCaption(figs);
	NACSS.content.applyIframeAspect(ifs);
	NACSS.content.applyUnderline(ss);

	// Link

	const as = target.querySelectorAll('a');
	NACSS.link.applyType(as, { observedSelector: 'main' });
	if (!CSS.supports('scroll-behavior', 'smooth')) {
		NACSS.link.applySmooth(as, { observedSelector: 'main' });
	}

	// Japanese Text

	const sgs = Array.from(target.getElementsByClassName('segmenter'));
	for (const h of [1, 2, 3, 4, 5, 6]) {
		const ts = target.querySelectorAll(`h${h}:not([class])`);
		for (const t of ts) sgs.push(t);
	}

	NACSS.ja.applySegmenter(sgs, { properNouns: [] });
	NACSS.ja.applyKerning([target], { doAssignAttribute: false, doDisableOnSelecting: false });

	// Align

	const left  = Array.from(target.getElementsByClassName('alignleft'));
	const right = Array.from(target.getElementsByClassName('alignright'));
	NACSS.align.applyFloat({ left, right }, {});

	// List

	const uls = target.getElementsByTagName('ul');
	NACSS.list.applyCustom(uls);

	// Tab

	const tsc = target.querySelectorAll('.tab-scroll, .pseudo-tab-page');
	const tst = target.querySelectorAll('.tab-stack, .tab-page');
	NACSS.tab.applyScroll(tsc);
	NACSS.tab.applyStack(tst);

	// Table

	const tables = target.getElementsByTagName('table');

	NACSS.table.applyNeatWidth(tables);
	NACSS.table.applyUsableView(tables);

	// Viewer

	const if_os  = Array.from(target.getElementsByClassName('iframe-opener'));
	const os_ifs = Array.from(target.querySelectorAll('.iframe-opener + iframe'));
	const fig_a  = Array.from(target.querySelectorAll('figure a'));

	NACSS.viewer.applyIframe(if_os, os_ifs);
	NACSS.viewer.applyImage(fig_a);

	// Scroll Effect
	const ts = target.querySelectorAll('[data-nc-scroll-effect]');
	NACSS.scroll.apply(ts);
}
