<template>
    <!-- <section id="wrapper">

        <div class="row">
            <div class="col-md-12">
                <div class="masthead well well-sm">
                    <h1>
                        <a href="index.asp"><span class="light text-primary">knowledge</span><span style="font-family: Lato, sans-serif; font-weight: 300; text-decoration: none; rgb(45,137,239);">|</span><span class="dark text-primary">Base</span></a>
                    </h1>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-10">

                <div class="article">
                    <h3>Pellentesque habitant morbi tristique</h3>

                    <ul class="list-unstyled list-inline">
                        <li><i class="fa fa-calendar"></i> February 02, 2013</li>
                        <li><i class="fa fa-user"></i> Sergio Rodriguez</li>
                        <li><i class="fa fa-comments"></i> <a href="#">24 Comments</a></li>
                    </ul>

                    <div class="article-content">

                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>

                        <blockquote class="hero">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit posuere erat a ante.</p>
                            <small>Someone famous <cite title="Source Title">Source Title</cite></small>
                        </blockquote>

                        <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>

                    </div>

                    <ul class="list-unstyled list-inline blog-tags">
                        <li><a href="#"><span class="fa fa-tag"></span> Example heading</a></li>
                        <li><a href="#"><span class="fa fa-tag"></span> Example heading</a></li>
                        <li><a href="#"><span class="fa fa-tag"></span> Example heading</a></li>
                    </ul>

                </div>

            </div>

            <div class="col-md-2">

                <div>

                    <h3>Tools</h3>

                    <div class="list-group" id="list-group">

                        <a href="#" class="list-group-item">
                            <span class="fa-stack fa-lg">
                                <i class="fa-stack-2x fa fa-circle "></i>
                                <i class="fa-stack-1x text-primary fa fa-envelope "></i>
                            </span>
                            <span class="">Email</span>
                        </a>
                        <a href="#" class="list-group-item">
                            <span class="fa-stack fa-lg">
                                <i class="fa-stack-2x fa fa-circle "></i>
                                <i class="fa-stack-1x text-primary fa fa-envelope "></i>
                            </span>
                            <span class="">Email</span>
                        </a>
                        <a href="#" class="list-group-item">
                            <span class="fa-stack fa-lg">
                                <i class="fa-stack-2x fa fa-circle "></i>
                                <i class="fa-stack-1x text-primary fa fa-envelope "></i>
                            </span>
                            <span class="">Email</span>
                        </a>
                        <a href="#" class="list-group-item">
                            <span class="fa-stack fa-lg">
                                <i class="fa-stack-2x fa fa-circle "></i>
                                <i class="fa-stack-1x text-primary fa fa-envelope "></i>
                            </span>
                            <span class="">Email</span>
                        </a>
                        <a href="#" class="list-group-item">
                            <span class="fa-stack fa-lg">
                                <i class="fa-stack-2x fa fa-circle "></i>
                                <i class="fa-stack-1x text-primary fa fa-envelope "></i>
                            </span>
                            <span class="">Email</span>
                        </a>
                    </div>

                    <div class="headline">
                        <h3>Tags</h3>
                    </div>

                    <ul class="list-unstyled list-inline blog-tags">
                        <li><a href="#"><i class="fa fa-tags"></i> Business</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> Music</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> Internet</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> Education</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> People</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> Math</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> Photos</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> Electronics</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> Apple</a></li>
                        <li><a href="#"><i class="fa fa-tags"></i> Canada</a></li>
                    </ul>

                </div>

            </div>
        </div>

    </section> -->
    <div>
        <Article 
            :article="article"
        />
    </div>
</template>

<script>
import Article from '../../components/article/show-detail/index';
export default {
    components: { Article },
    async asyncData({ params }) {
        return {
            article: {
                title: 'první článek',
                tags: ['grammar', 'conditional'],
                relatedArticles: [
                    {
                        title: 'Podmiňovací způsob',
                        url: 'article/condition-way'
                    }
                ],
                body: `
                <h4>Vysvětlení základních tvarů <small>would , should, Could</small> </h4>
                <p>Podmiňovací způsob přítomný vyjadřuje v anglickém jazyce děj, který by za jistých podmínek mohl
nastat - v přítomnosti nebo budoucnosti.</p>
<p>Angličtina užívá <strong>would</strong> ve všech osobách. V 1. osobě jednotného i množného čísla je možno užít také
<strong>should</strong>. Tento tvar se už dnes pociťuje jako knižní. <br/ >
Should může ale v anglickém jazyce vyjadřovat také doporučení nebo radu.</p>
<p>
    <strong>Could</strong>, <strong>might</strong> jsou tvary podmiňovacího způsobu sloves can a may. <br>
    Could zde vyjadřuje, že určitou věc by bylo možno uskutečnit, might navíc vyjadřuje jistou
pochybnost. <br />
Could je ale v anglickém jazyce rovněž tvarem minulého času.
</p>
<h5>Příklady</h5>
<table class="table">
    <tbody>
        <tr> <td>I would sign it. </td>  <td> Podepsal bych to. </td>  </tr>
           <tr>  <td>We would send the fax. </td>  <td> Poslali bychom ten fax. </td></tr>
           <tr>  <td>They would call me. </td>  <td> Zavolali by mi. </td></tr>
       <tr>  <td>You should speak up. </td>  <td> Měl bys mluvit hlasitěji. </td></tr>
       <tr>  <td>She could come with us.  </td>  <td> Mohla by jít s námi. <strong>(present)</strong> || Mohla jet s námi. <strong>(past)</strong></td></tr>
       <tr>  <td>She might come with us.   </td>  <td> Snad by mohla jít s námi. </td></tr>
    </tbody>
</table>

<h4> Podmiňovací způsob minulý </h4>
<p> Angličtina tvoří podmiňovací způsob minulý pomocí would a minulého infinitivu významového
slovesa (minulý infinitiv = have + příčestí trpné, např. have worked, have written).
Podobně jako u podmiňovacího způsobu přítomného je v angličtině možno v 1. osobě jednotného
i množného čísla užít should. Rovněž zde se pociťuje jako knižní tvar. </p>
<p>
Podmiňovací způsob minulý vyjadřuje v anglickém jazyce děj, který za jistých podmínek mohl nastat
v minulosti, ale neuskutečnil se.
</p>

<h5>Srovnání</h5>
<table class="table">
    <tbody>
         <tr>  <td>They could fly tomorrow </td>  <td>Mohli by letět zítra. </td></tr>
       <tr>  <td>They could have flown last week.  </td>  <td> Mohli letět minulý týden. (Ale neletěli.) </td></tr>
       <tr>  <td>She would lend me some money.  </td>  <td> Půjčila by mi nějaké peníze.</td></tr>
       <tr>  <td>She would have lent me some money.  </td>  <td> Půjčila by mi nějaké peníze. (Byla by mi nějaké peníze půjčila.)</td></tr>
    <tr> <td>You should finish it. </td>  <td> Měl bys to dokončit.  </td>  </tr>
           <tr>  <td>You should have finished it. </td>  <td> Měl jsi to dokončit. (Ale nedokončil jsi to.)</td></tr>
          
    </tbody>
</table>
`,
            },
            url: params.url
        };
    }
};
</script>
