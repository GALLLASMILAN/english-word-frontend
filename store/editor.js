export const state = () => ({
    // some quill options
    modules: {
        table: true,
        toolbar: [
            [
                'bold', 'italic', 'underline', 'strike'
            ],
            [
                'blockquote', 'code-block'
            ],
            [
                {
                    header: [3, 4, 5, 6, false]
                }
            ],
            [
                {
                    list: 'ordered'
                }, {
                    list: 'bullet'
                }
            ],
            [
                {
                    script: 'sub'
                }, {
                    script: 'super'
                }
            ],
            [
                {
                    indent: '-1'
                }, {
                    indent: '+1'
                }
            ],
            [
                {
                    direction: 'rtl'
                }
            ],
            [
                {
                    size: ['small', false, 'large', 'huge']
                }
            ],
            [
                {
                    color: []
                }, {
                    background: []
                }
            ],
            [
                {
                    font: []
                }
            ],
            [
                {
                    align: []
                }
            ],
            ['clean'],
            ['link', 'image', 'video']
        ]
    }
});