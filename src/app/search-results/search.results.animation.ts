import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';

export const fadeInAnimation = trigger('listAnimation', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            stagger(100, [
                animate('500ms ease-in', keyframes([
                    style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                ])),
            ]),
        ], { optional: true }),
    ]),
]);

export const fadeInOutAnimation = trigger('fadeInOut', [
    transition('* => *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))], { optional: true }),
    ]),
]);