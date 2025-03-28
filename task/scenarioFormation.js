// task: 
// Вам дан список ролей в виде массива и сценарий пьесы в виде строки. 
// Каждая строчка сценария пьесы дана в следующем виде: Роль: текст
// Текст может содержать любые символы.
// Напишите программу, которая будет группировать строчки по ролям, пронумеровывать их и возвращать результат в виде готового текста.

const roles = ['Городничий', 'Аммос Федорович', 'Артемий Филиппович', 'Лука Лукич', 'Христиан Иванович'];

const text = `Городничий. Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович. Как ревизор?
Артемий Филиппович. Как ревизор?
Городничий. Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович. Вот те на!
Артемий Филиппович. Вот не было заботы, так подай!
Лука Лукич. Господи Боже! еще и с секретным предписаньем!
Городничий. Я как будто предчувствовал: сегодня мне всю ночь снились какие-то две необыкновенные крысы. Право, этаких я никогда не видывал: черные, неестественной величины! пришли, понюхали — и пошли прочь. Вот я вам прочту письмо, которое получил я от Андрея Ивановича Чмыхова, которого вы, Артемий Филиппович, знаете. Вот что он пишет: «Любезный друг, кум и благодетель (бормочет вполголоса, пробегая скоро глазами)... и уведомить тебя». А! вот: «Спешу, между прочим, уведомить тебя, что приехал чиновник с предписанием осмотреть всю губернию и особенно наш уезд (значительно поднимает палец вверх). Я узнал это от самых достоверных людей, хотя он представляет себя частным лицом. Так как я знаю, что за тобою, как за всяким, водятся грешки, потому что ты человек умный и не любишь пропускать того, что плывет в руки...» (остановясь), ну, здесь свои... «то советую тебе взять предосторожность, ибо он может приехать во всякий час, если только уже не приехал и не живет где-нибудь инкогнито... Вчерашнего дни я...» Ну, тут уж пошли дела семейные: «...сестра Анна Кириловна приехала к нам с своим мужем; Иван Кирилович очень потолстел и все играет на скрыпке...» — и прочее, и прочее. Так вот какое обстоятельство!
Аммос Федорович. Да, обстоятельство такое... необыкновенно, просто необыкновенно. Что-нибудь недаром.
Лука Лукич. Зачем же, Антон Антонович, отчего это? Зачем к нам ревизор?
Городничий. Зачем! Так уж, видно, судьба! (Вздохнув.) До сих пор, благодарение Богу, подбирались к другим городам; теперь пришла очередь к нашему.
Аммос Федорович. Я думаю, Антон Антонович, что здесь тонкая и больше политическая причина. Это значит вот что: Россия... да... хочет вести войну, и министерия-то, вот видите, и подослала чиновника, чтобы узнать, нет ли где измены.
Городничий. Эк куда хватили! Еще умный человек! В уездном городе измена! Что он, пограничный, что ли? Да отсюда, хоть три года скачи, ни до какого государства не доедешь.
Аммос Федорович. Нет, я вам скажу, вы не того... вы не... Начальство имеет тонкие виды: даром что далеко, а оно себе мотает на ус.
Городничий. Мотает или не мотает, а я вас, господа, предуведомил. Смотрите, по своей части я кое-какие распоряженья сделал, советую и вам. Особенно вам, Артемий Филиппович! Без сомнения, проезжающий чиновник захочет прежде всего осмотреть подведомственные вам богоугодные заведения — и потому вы сделайте так, чтобы все было прилично: колпаки были бы чистые, и больные не походили бы на кузнецов, как обыкновенно они ходят по-домашнему.
Артемий Филиппович. Ну, это еще ничего. Колпаки, пожалуй, можно надеть и чистые.
Городничий. Да, и тоже над каждой кроватью надписать по-латыни или на другом каком языке... это уж по вашей части, Христиан Иванович, — всякую болезнь: когда кто заболел, которого дня и числа... Нехорошо, что у вас больные такой крепкий табак курят, что всегда расчихаешься, когда войдешь. Да и лучше, если б их было меньше: тотчас отнесут к дурному смотрению или к неискусству врача.
Артемий Филиппович. О! насчет врачеванья мы с Христианом Ивановичем взяли свои меры: чем ближе к натуре, тем лучше, — лекарств дорогих мы не употребляем. Человек простой: если умрет, то и так умрет; если выздоровеет, то и так выздоровеет. Да и Христиану Ивановичу затруднительно было б с ними изъясняться: он по-русски ни слова не знает.
Христиан Иванович издает звук, отчасти похожий на букву и и несколько на е.
Городничий. Вам тоже посоветовал бы, Аммос Федорович, обратить внимание на присутственные места. У вас там в передней, куда обыкновенно являются просители, сторожа завели домашних гусей с маленькими гусенками, которые так и шныряют под ногами. Оно, конечно, домашним хозяйством заводиться всякому похвально, и почему ж сторожу и не завесть его? только, знаете, в таком месте неприлично... Я и прежде хотел вам это заметить, но все как-то позабывал.
Аммос Федорович. А вот я их сегодня же велю всех забрать на кухню. Хотите, приходите обедать.
Городничий. Кроме того, дурно, что у вас высушивается в самом присутствии всякая дрянь и над самым шкапом с бумагами охотничий арапник. Я знаю, вы любите охоту, но все на время лучше его принять, а там, как проедет ревизор, пожалуй, опять его можете повесить. Также заседатель ваш... он, конечно, человек сведущий, но от него такой запах, как будто бы он сейчас вышел из винокуренного завода, — это тоже нехорошо. Я хотел давно об этом сказать вам, но был, не помню, чем-то развлечен. Есть против этого средства, если уже это действительно, как он говорит, у него природный запах: можно ему посоветовать есть лук, или чеснок, или что-нибудь другое. В этом случае может помочь разными медикаментами Христиан Иванович.
Христиан Иванович издает тот же звук.
Аммос Федорович. Нет, этого уже невозможно выгнать: он говорит, что в детстве мамка его ушибла, и с тех пор от него отдает немного водкою.
Городничий. Да я так только заметил вам. Насчет же внутреннего распоряжения и того, что называет в письме Андрей Иванович грешками, я ничего не могу сказать. Да и странно говорить: нет человека, который бы за собою не имел каких-нибудь грехов. Это уже так Самим Богом устроено, и волтерианцы напрасно против этого говорят.
Аммос Федорович. Что ж вы полагаете, Антон Антонович, грешками? Грешки грешкам — рознь. Я говорю всем открыто, что беру взятки, но чем взятки? Борзыми щенками. Это совсем иное дело.
Городничий. Ну, щенками или чем другим — всё взятки.
Аммос Федорович. Ну нет, Антон Антонович. А вот, например, если у кого-нибудь шуба стоит пятьсот рублей, да супруге шаль...
Городничий. Ну, а что из того, что вы берете взятки борзыми щенками? Зато вы в Бога не веруете; вы в церковь никогда не ходите; а я по крайней мере в вере тверд и каждое воскресенье бываю в церкви. А вы... О, я знаю вас: вы если начнете говорить о сотворении мира, просто волосы дыбом поднимаются.
Аммос Федорович. Да ведь сам собою дошел, собственным умом.
Городничий. Ну, в ином случае много ума хуже, чем бы его совсем не было. Впрочем, я так только упомянул об уездном суде; а по правде сказать, вряд ли кто когда-нибудь заглянет туда: это уж такое завидное место, сам Бог ему покровительствует. А вот вам, Лука Лукич, так, как смотрителю учебных заведений, нужно позаботиться особенно насчет учителей. Они люди, конечно, ученые и воспитывались в разных коллегиях, но имеют очень странные поступки, натурально неразлучные с ученым званием. Один из них, например, вот этот, что имеет толстое лицо... не вспомню его фамилии, никак не может обойтись без того, чтобы, взошедши на кафедру, не сделать гримасу, вот этак (делает гримасу), и потом начнет рукою из-под галстука утюжить свою бороду. Конечно, если он ученику сделает такую рожу, то оно еще ничего: может быть, оно там и нужно так, об этом я не могу судить; но вы посудите сами, если он сделает это посетителю, — это может быть очень худо: господин ревизор или другой кто может принять это на свой счет. Из этого черт знает что может произойти.
Лука Лукич. Что ж мне, право, с ним делать? Я уж несколько раз ему говорил. Вот еще на днях, когда зашел было в класс наш предводитель, он скроил такую рожу, какой я никогда еще не видывал. Он-то ее сделал от доброго сердца, а мне выговор: зачем вольнодумные мысли внушаются юношеству.
Городничий. То же я должен вам заметить и об учителе по исторической части. Он ученая голова — это видно, и сведений нахватал тьму, но только объясняет с таким жаром, что не помнит себя. Я раз слушал его: ну, покамест говорил об ассириянах и вавилонянах — еще ничего, а как добрался до Александра Македонского, то я не могу вам сказать, что с ним сделалось. Я думал, что пожар, ей-Богу! Сбежал с кафедры и что силы есть хвать стулом об пол. Оно, конечно, Александр Македонский герой, но зачем же стулья ломать? от этого убыток казне.
Лука Лукич. Да, он горяч! Я ему это несколько раз уже замечал... Говорит: «Как хотите, для науки я жизни не пощажу».
Городничий. Да, таков уже неизъяснимый закон судеб: умный человек — или пьяница, или рожу такую состроит, что хоть святых выноси.
Лука Лукич. Не приведи Бог служить по ученой части! Всего боишься: всякий мешается, всякому хочется показать, что он тоже умный человек.
Городничий. Это бы еще ничего, — инкогнито проклятое! Вдруг заглянет: «А, вы здесь, голубчики! А кто, скажет, здесь судья?» — «Ляпкин-Тяпкин». — «А подать сюда Ляпкина-Тяпкина! А кто попечитель богоугодных заведений?» — «Земляника». — «А подать сюда Землянику!» Вот что худо!`;

// вариант 1
// function scenarioFormation(roles, text) {
//     const arrTextWithRoles = text.split('\n').map(el => el.split('. '));

//     const arrRes = [];

//     for (let i = 0; i < roles.length; i++) {
//         const role = [];
//         role.push(roles[i]);

//         for (let j = 0; j < arrTextWithRoles.length; j++) {
//             if (arrTextWithRoles[j][0] === roles[i]) {
//                 arrTextWithRoles[j].shift();
//                 let str = `${j+1}) ${arrTextWithRoles[j].join('')}`
//                 role.push(str);
//             }
//         }

//         arrRes.push(role);
//     }

//     let resultText = '';

//     arrRes.forEach(item => {
//         let role = item.shift();
//         resultText += `\n${role}:\n${item.join(`\n`)}\n`;
//     })


//     return resultText
// }

// console.log( scenarioFormation(roles, text));

// вариант 2

function createScenario(roles, text) {
    const phrases = text.split('\n');

    let resultScenario = '';

    roles.forEach(item => {
        let role = `\n${item}:\n`;

        phrases.forEach((phrase, i) => {
            if (phrase.indexOf(item) >= 0 && phrase.indexOf(item) < item.length) {
                const content = phrase.slice(item.length + 1);
                role += `${i+1}) ${content}\n`;
            }
        });

        resultScenario += role;
    });

    return resultScenario;
}

console.log( createScenario(roles, text) );