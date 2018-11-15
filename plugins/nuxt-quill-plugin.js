import Vue from 'vue';
import VueQuillEditor, { Quill } from 'vue-quill-editor/dist/ssr';

const quillTable = require('quill-table');
 
Quill.register(quillTable.TableCell);
Quill.register(quillTable.TableRow);
Quill.register(quillTable.Table);
Quill.register(quillTable.Contain);
Quill.register('modules/table', quillTable.TableModule);

Vue.use(VueQuillEditor);