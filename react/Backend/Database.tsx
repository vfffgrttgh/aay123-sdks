export let db: any = {
    json: function(): any {
        return {
            "name": "Aayansh"
        };
    },

    xml: function(): any {
        return [
            { id: 1, value: "Hi!" },
            { id: 2, value: "Hello!" },
        ];
    },
};
