!function(a){"use strict";function b(){f(),g(),h()}function c(){g()}function d(){}function e(){}function f(){a("audio.mkd-blog-audio").mediaelementplayer({audioWidth:"100%"})}function g(){if(a(".mkd-blog-holder.mkd-blog-type-masonry").length){var b=a(".mkd-blog-holder.mkd-blog-type-masonry");b.waitForImages(function(){b.isotope({layoutMode:"packery",itemSelector:"article",resizable:!1,packery:{columnWidth:".mkd-blog-masonry-grid-sizer",gutter:".mkd-blog-masonry-grid-gutter"}}),b.addClass("mkd-appeared")});var c=a(".mkd-filter-blog-holder");a(".mkd-filter").click(function(){var d=a(this),e=d.attr("data-filter");return c.find(".mkd-active").removeClass("mkd-active"),d.addClass("mkd-active"),b.isotope({filter:e}),!1})}}function h(){var b=a(".mkd-blog-holder.mkd-blog-load-more");b.length&&b.each(function(){var c,d,e=a(this),f=e.find(".mkd-load-more-ajax-pagination .mkd-btn");(b.hasClass("mkd-blog-type-masonry")||b.hasClass("mkd-blog-type-masonry-gallery"))&&(f=b.next().find(".mkd-btn")),d=e.data("max-pages"),f.on("click",function(b){b.preventDefault(),b.stopPropagation();var h=i(e);if((c=h.nextPage)<=d){var k=j(h);a.ajax({type:"POST",data:k,url:MikadoAjaxUrl,success:function(b){c++,e.data("next-page",c);var d=a.parseJSON(b),f=d.html;e.waitForImages(function(){e.hasClass("mkd-blog-type-masonry")?(e.append(f).isotope("reloadItems").isotope({sortBy:"original-order"}),g()):e.hasClass("mkd-blog-type-masonry-gallery")?(e.append(f).isotope("reloadItems").isotope({sortBy:"original-order"}),mkdInitBlogMasonryGallery(),mkdInitBlogMasonryGalleryContentPosition()):e.find("article:last").after(f),setTimeout(function(){mkd.modules.blog.mkdInitAudioPlayer(),mkd.modules.common.mkdOwlSlider(),mkd.modules.common.mkdFluidVideo()},400)})}})}c===d&&f.hide()})})}function i(a){var b={};return b.nextPage="",b.number="",b.category="",b.blogType="",b.archiveCategory="",b.archiveAuthor="",b.archiveTag="",b.archiveDay="",b.archiveMonth="",b.archiveYear="",void 0!==a.data("next-page")&&a.data("next-page")!==!1&&(b.nextPage=a.data("next-page")),void 0!==a.data("post-number")&&a.data("post-number")!==!1&&(b.number=a.data("post-number")),void 0!==a.data("category")&&a.data("category")!==!1&&(b.category=a.data("category")),void 0!==a.data("blog-type")&&a.data("blog-type")!==!1&&(b.blogType=a.data("blog-type")),void 0!==a.data("archive-category")&&a.data("archive-category")!==!1&&(b.archiveCategory=a.data("archive-category")),void 0!==a.data("archive-author")&&a.data("archive-author")!==!1&&(b.archiveAuthor=a.data("archive-author")),void 0!==a.data("archive-tag")&&a.data("archive-tag")!==!1&&(b.archiveTag=a.data("archive-tag")),void 0!==a.data("archive-day")&&a.data("archive-day")!==!1&&(b.archiveDay=a.data("archive-day")),void 0!==a.data("archive-month")&&a.data("archive-month")!==!1&&(b.archiveMonth=a.data("archive-month")),void 0!==a.data("archive-year")&&a.data("archive-year")!==!1&&(b.archiveYear=a.data("archive-year")),b}function j(a){return{action:"sparks_mikado_blog_load_more",nextPage:a.nextPage,number:a.number,category:a.category,blogType:a.blogType,archiveCategory:a.archiveCategory,archiveAuthor:a.archiveAuthor,archiveTag:a.archiveTag,archiveDay:a.archiveDay,archiveMonth:a.archiveMonth,archiveYear:a.archiveYear}}var k={};mkd.modules.blog=k,k.mkdInitAudioPlayer=f,k.mkdInitBlogMasonry=g,k.mkdInitBlogLoadMore=h,k.mkdOnDocumentReady=b,k.mkdOnWindowLoad=c,k.mkdOnWindowResize=d,k.mkdOnWindowScroll=e,a(document).ready(b),a(window).load(c),a(window).resize(d),a(window).scroll(e)}(jQuery);