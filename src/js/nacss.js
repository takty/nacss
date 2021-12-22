/**
 *
 * Script
 *
 * @author Takuto Yanagida
 * @version 2021-12-06
 *
 */


'use strict';

window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	{
		// @include _initializer.js
		NS.initializeQuerySelector    = initializeQuerySelector;
		NS.initializeQuerySelectorAll = initializeQuerySelectorAll;
	}

	// -------------------------------------------------------------------------

	// @include _style-class.js
	// @include _utility.js

	// Align -------------------------------------------------------------------

	{
		// @include ../../node_modules/nacss-align/src/js/_float.js
		NS.alignFloat = initialize;
	}

	// Content -----------------------------------------------------------------

	{
		// @include ../../node_modules/nacss-content/src/js/_image-alt.js
		NS.contentImageAlt = initialize;
	}

	{
		// @include ../../node_modules/nacss-content/src/js/_figure-caption.js
		NS.contentFigureCaption = initialize;
	}

	{
		// @include ../../node_modules/nacss-content/src/js/_iframe-aspect.js
		NS.contentIframeAspect = initialize;
	}

	{
		// @include ../../node_modules/nacss-content/src/js/_underline.js
		NS.contentUnderline = initialize;
	}

	// Delay Loading -----------------------------------------------------------

	{
		// @include ../../node_modules/nacss-delay/src/js/_common.js

		{
			// @include ../../node_modules/nacss-delay/src/js/_image.js
			NS.delayImage         = initialize;
			NS.delayImageIsNeeded = isPolyfillNeeded;
		}

		{
			// @include ../../node_modules/nacss-delay/src/js/_iframe.js
			NS.delayIframe         = initialize;
			NS.delayIframeIsNeeded = isPolyfillNeeded;
		}
	}

	// Japanese Text -----------------------------------------------------------

	{
		// @include ../../node_modules/nacss-ja/src/js/_common.js

		{
			// @include ../../node_modules/nacss-ja/src/js/_kerning.js
			NS.jaKerning      = initialize;
			NS.jaApplyKerning = apply;
		}

		{
			// @include ../../node_modules/nacss-ja/src/js/_segmenter.js
			NS.jaSegmenter      = initialize;
			NS.jaApplySegmenter = apply;
		}
	}

	// Link --------------------------------------------------------------------

	{
		// @include ../../node_modules/nacss-link/src/js/_common.js

		{
			// @include ../../node_modules/nacss-link/src/js/_type.js
			NS.linkApply      = apply;
			NS.linkApplyByUrl = applyByUrl;

			NS.linkIsLinkImage = isLinkImage;
		}

		{
			// @include ../../node_modules/nacss-link/src/js/_anchor.js
			NS.linkAnchorScroll = initialize;

			NS.smoothScrollToElement = smoothScrollToElement;
		}
	}

	// List --------------------------------------------------------------------

	{
		// @include ../../node_modules/nacss-list/src/js/_customized.js
		NS.listCustomized = initialize;
	}

	// Scroll Effect -----------------------------------------------------------

	{
		// @include ../../node_modules/nacss-scroll/src/js/_scroll.js
		NS.scroll = initialize;
	}

	// Tab ---------------------------------------------------------------------

	{
		// @include ../../node_modules/nacss-tab/src/js/_common.js

		{
			// @include ../../node_modules/nacss-tab/src/js/_scroll.js
			NS.tabScroll = initialize;
		}

		{
			// @include ../../node_modules/nacss-tab/src/js/_stack.js
			NS.tabStack = initialize;
		}
	}

	// Table -------------------------------------------------------------------

	{
		{
			// @include ../../node_modules/nacss-table/src/js/_neat-width.js
			NS.tableNeatWidth = initialize;
		}

		{
			// @include ../../node_modules/nacss-table/src/js/_usable-view.js
			NS.tableUsableView = initialize;
		}
	}

	// Utility (Query) ---------------------------------------------------------

	{
		// @include ../../node_modules/nacss-utility/src/js/_inner.js
		NS['BROWSER'] = getBrowser();
		NS['DEVICE']  = getDevice();

		onResize(() => {
			[NS['BP_WIDTH'], NS['BP_HEIGHT']] = getBreakPointSize();
		}, true);
	}

	// Viewer ------------------------------------------------------------------

	{
		// @include ../../node_modules/nacss-viewer/src/js/_dialog.js
		// @include ../../node_modules/nacss-viewer/src/js/_hash.js

		{
			// @include ../../node_modules/nacss-viewer/src/js/_touch.js
			// @include ../../node_modules/nacss-viewer/src/js/_image.js
			NS.viewerImage = initializeImageViewer;
		}

		{
			// @include ../../node_modules/nacss-viewer/src/js/_iframe.js
			NS.viewerIframe = initializeIframeViewer;
		}
	}

})(window['NACSS']);
