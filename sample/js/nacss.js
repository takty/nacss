/**
 *
 * Script
 *
 * @author Takuto Yanagida
 * @version 2021-12-22
 *
 */


'use strict';

window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	{
		// @include dist/js/_/_initializer.js
		NS.initializeQuerySelector    = initializeQuerySelector;
		NS.initializeQuerySelectorAll = initializeQuerySelectorAll;
	}

	// -------------------------------------------------------------------------

	// @include dist/js/_/_style-class.js
	// @include dist/js/_/_utility.js

	// Align -------------------------------------------------------------------

	{
		// @include dist/js/align/_float.js
		NS.alignFloat = initialize;
	}

	// Content -----------------------------------------------------------------

	{
		// @include dist/js/content/_image-alt.js
		NS.contentImageAlt = initialize;
	}

	{
		// @include dist/js/content/_figure-caption.js
		NS.contentFigureCaption = initialize;
	}

	{
		// @include dist/js/content/_iframe-aspect.js
		NS.contentIframeAspect = initialize;
	}

	{
		// @include dist/js/content/_underline.js
		NS.contentUnderline = initialize;
	}

	// Delay Loading -----------------------------------------------------------

	{
		// @include dist/js/delay/_common.js

		{
			// @include dist/js/delay/_image.js
			NS.delayImage         = initialize;
			NS.delayImageIsNeeded = isPolyfillNeeded;
		}

		{
			// @include dist/js/delay/_iframe.js
			NS.delayIframe         = initialize;
			NS.delayIframeIsNeeded = isPolyfillNeeded;
		}
	}

	// Japanese Text -----------------------------------------------------------

	{
		// @include dist/js/ja/_common.js

		{
			// @include dist/js/ja/_kerning.js
			NS.jaKerning      = initialize;
			NS.jaApplyKerning = apply;
		}

		{
			// @include dist/js/ja/_segmenter.js
			NS.jaSegmenter      = initialize;
			NS.jaApplySegmenter = apply;
		}
	}

	// Link --------------------------------------------------------------------

	{
		// @include dist/js/link/_common.js

		{
			// @include dist/js/link/_type.js
			NS.linkApply      = apply;
			NS.linkApplyByUrl = applyByUrl;

			NS.linkIsLinkImage = isLinkImage;
		}

		{
			// @include dist/js/link/_anchor.js
			NS.linkAnchorScroll = initialize;

			NS.smoothScrollToElement = smoothScrollToElement;
		}
	}

	// List --------------------------------------------------------------------

	{
		// @include dist/js/list/_customized.js
		NS.listCustomized = initialize;
	}

	// Scroll Effect -----------------------------------------------------------

	{
		// @include dist/js/scroll/_scroll.js
		NS.scroll = initialize;
	}

	// Tab ---------------------------------------------------------------------

	{
		// @include dist/js/tab/_common.js

		{
			// @include dist/js/tab/_scroll.js
			NS.tabScroll = initialize;
		}

		{
			// @include dist/js/tab/_stack.js
			NS.tabStack = initialize;
		}
	}

	// Table -------------------------------------------------------------------

	{
		{
			// @include dist/js/table/_neat-width.js
			NS.tableNeatWidth = initialize;
		}

		{
			// @include dist/js/table/_usable-view.js
			NS.tableUsableView = initialize;
		}
	}

	// Utility (Query) ---------------------------------------------------------

	{
		// @include dist/js/utility/_inner.js
		NS['BROWSER'] = getBrowser();
		NS['DEVICE']  = getDevice();

		onResize(() => {
			[NS['BP_WIDTH'], NS['BP_HEIGHT']] = getBreakPointSize();
		}, true);
	}

	// Viewer ------------------------------------------------------------------

	{
		// @include dist/js/viewer/_dialog.js
		// @include dist/js/viewer/_hash.js

		{
			// @include dist/js/viewer/_touch.js
			// @include dist/js/viewer/_image.js
			NS.viewerImage = initializeImageViewer;
		}

		{
			// @include dist/js/viewer/_iframe.js
			NS.viewerIframe = initializeIframeViewer;
		}
	}

})(window['NACSS']);
