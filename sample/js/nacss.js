/**
 *
 * Script
 *
 * @author Takuto Yanagida
 * @version 2021-12-27
 *
 */


'use strict';

window['NACSS'] = window['NACSS'] || {};


((NS) => {

	// @include dist/js/_/__style-class.js
	// @include dist/js/_/__utility.js
	{
		// @include dist/js/_/_initializer.js
		NS.initializeQuerySelector    = initializeQuerySelector;
		NS.initializeQuerySelectorAll = initializeQuerySelectorAll;
	}

	// Align -------------------------------------------------------------------
	window['NACSS']['align'] = {};
	{
		// @include dist/js/align/_float.js
		NS.align.alignFloat = apply;
	}

	// Content -----------------------------------------------------------------
	window['NACSS']['content'] = {};
	{
		// @include dist/js/content/_image-alt.js
		NS.content.applyImageAlt = apply;
	}
	{
		// @include dist/js/content/_figure-caption.js
		NS.content.applyFigureCaption = apply;
	}
	{
		// @include dist/js/content/_iframe-aspect.js
		NS.content.applyIframeAspect = apply;
	}
	{
		// @include dist/js/content/_underline.js
		NS.content.applyUnderline = apply;
	}

	// Delay Loading -----------------------------------------------------------
	window['NACSS']['delay'] = {};
	{
		{
			// @include dist/js/delay/_image.js
			NS.delay.applyImage = apply;

			NS.delay.isPolyfillNeededForImage = () => isPolyfillNeeded(HTMLImageElement.prototype);
		}
		{
			// @include dist/js/delay/_iframe.js
			NS.delay.applyIframe = apply;

			NS.delay.isPolyfillNeededForIframe = () => isPolyfillNeeded(HTMLIFrameElement.prototype);
		}
		// @include dist/js/delay/_common.js
	}

	// Japanese Text -----------------------------------------------------------
	window['NACSS']['ja'] = {};
	{
		{
			// @include dist/js/ja/_kerning.js
			NS.ja.applyKerning         = apply;
			NS.ja.applyKerningToString = applyToString;
		}
		{
			// @include dist/js/ja/_segmenter.js
			NS.ja.applySegmenter         = apply;
			NS.ja.applySegmenterToString = applyToString;
		}
		// @include dist/js/ja/_common.js
	}

	// Link --------------------------------------------------------------------
	window['NACSS']['link'] = {};
	{
		{
			// @include dist/js/link/_type.js
			NS.link.applyType      = apply;
			NS.link.applyTypeByUrl = applyByUrl;

			NS.link.isImageLink = isImageLink;
		}
		{
			// @include dist/js/link/_smooth.js
			NS.link.applySmooth = apply;

			NS.smoothScrollToElement = smoothScrollToElement;
		}
		// @include dist/js/link/_common.js
		NS.link.applyAll = applyAll;
	}

	// List --------------------------------------------------------------------
	window['NACSS']['list'] = {};
	{
		// @include dist/js/list/_custom.js
		NS.list.applyCustom = apply;
	}

	// Scroll Effect -----------------------------------------------------------
	window['NACSS']['scroll'] = {};
	{
		// @include dist/js/scroll/_scroll.js
		NS.scroll.apply = apply;
	}

	// Tab ---------------------------------------------------------------------
	window['NACSS']['tab'] = {};
	{
		{
			// @include dist/js/tab/_scroll.js
			NS.tab.applyScroll = apply;
		}
		{
			// @include dist/js/tab/_stack.js
			NS.tab.applyStack = apply;
		}
		// @include dist/js/tab/_common.js
	}

	// Table -------------------------------------------------------------------
	window['NACSS']['table'] = {};
	{
		{
			// @include dist/js/table/_neat-width.js
			NS.table.applyNeatWidth = apply;
		}
		{
			// @include dist/js/table/_usable-view.js
			NS.table.applyUsableView = apply;
		}
	}

	// Viewer ------------------------------------------------------------------
	window['NACSS']['viewer'] = {};
	{
		// @include __hash.js
		// @include __style-class.js
		// @include __touch.js
		// @include __utility.js
		{
			// @include dist/js/viewer/_image.js
			NS.viewer.applyImage = apply;
		}
		{
			// @include dist/js/viewer/_iframe.js
			NS.viewer.applyIframe = apply;
		}
	}

	// Utility -----------------------------------------------------------------
	{
		// @include dist/js/utility/_query.js
		NS['BROWSER'] = getBrowser();
		NS['DEVICE']  = getDevice();

		onResize(() => {
			[NS['BP_WIDTH'], NS['BP_HEIGHT']] = getBreakPointSize();
		}, true);
	}

})(window['NACSS']);
