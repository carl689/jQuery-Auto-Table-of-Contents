/**
 * Generates table of Contents dynamically from header tags.
 * @param int start     - Beginning header level
 * @param int deep      - How many levels deep to parse
 * @param string target - Target that contains headings to parse
 * @param bool linkOnly - Display only headings that can be linked to? (contain id)
 * @author Carl <carl689@gmail.com>
 */
function toc(start,deep,target,linkOnly){
	var level = parseInt(start);
        rreturn = "<div id='tableOfContents'>Table of Contents";
		rreturn += '<ul>';
		jQuery(target+' :header').each(function() {
			var objLevel = this.nodeName.substring(1,2);
			if(objLevel <= deep && objLevel >= start && (jQuery(this).attr('id') || linkOnly==false)){
				if(objLevel > level){
					while (objLevel > level){
						rreturn += '<li><ul>';
						level = parseInt(level) + 1;
					}
					level = parseInt(objLevel);
				}else if(objLevel < level){
					while (objLevel < level){
						rreturn += '</ul></li>';
						level = parseInt(level) - 1;
					}
					level = parseInt(objLevel);
				}
				rreturn += '<li>';
					rreturn += "<a href='#"+jQuery(this).attr('id')+"'>";
						rreturn += jQuery(this).text();
					rreturn += '</a>';
				rreturn += '</li>';
			}
		});
		rreturn += '</ul>';
	rreturn += '</div>';	   
	return rreturn;
}
