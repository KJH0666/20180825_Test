$(document).ready(function(){ 
        
        $('.fontStyle').click(function(){
        $('html,body').animate({scrollTop:'0px' },800);
        
        });
        $('.home-click').click(function(){
            $('html,body').animate({scrollTop:'0px' },800);
            
        });

        $('.personalSkills-click').click(function(){
            $('html,body').animate({scrollTop: $('#personalSkills').offset().top-110},800);
        });

        $('.selfEvaluation-click').click(function(){
            $("html,body").animate({scrollTop: $('#selfEvaluation').offset().top-110},800);
        });

        $('.schoolExperience-click').click(function(){
            $('html,body').animate({scrollTop: $('#schoolExperience').offset().top-110},800);
        });

        $('.achievement-click').click(function(){
            $("html,body").animate({scrollTop: $('#achievement').offset().top-110},800);
        });
                       
})
