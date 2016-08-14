/**
 * Created by basst on 14.08.2016.
 */
function gallery(sSelector){
    var g = this;

    g.init(sSelector);

    g.pictures = g.find('.item__img');
    g.arrowPrev = g.find('.b-preview__arrow_prev');
    g.arrowNext = g.find('.b-preview__arrow_next');
    g.preview = g.find('.b-preview');
    g.previewImage = g.find('.b-preview__image');
    g.previewText = g.find('.b-preview__text');
    g.current = 0;
    g.qty = 0;

    g.showPreview 	= function(){
        g.current = g.pictures.index(this);
        g.showImage(0);
        g.preview.addClass('b-preview_shown');
    };

    g.showPrevious 	= function(){
        g.showImage(-1);
    };
    g.showNext 		= function(){
        g.showImage(1);
    };

    g.showImage 	= function(iShift){
        g.current += iShift;
        if(g.current === g.pictures.length){
            g.current = 0;
        }
        else if(g.current < 0){
            g.current = g.pictures.length - 1;
        }
        var jqPictures = g.pictures.eq(g.current)
            ,sSmallImgSrc = jqPictures.attr('src')
            ,sBigImgSrc = sSmallImgSrc.replace('small_','')
            ;
        g.current = g.pictures.index(jqPictures);
        g.previewImage.attr('src', sBigImgSrc);
    };

    g.closePreview 	= function(event){
        if($(event.target).hasClass('b-preview')){
            g.preview.removeClass('b-preview_shown');
        }
    };

    g.pictures.click(g.showPreview);
    g.arrowPrev.click(g.showPrevious);
    g.arrowNext.click(g.showNext);
    g.preview.click(g.closePreview);
}

gallery.prototype = new Component();