import multer from 'multer';

export const MulterUpload = multer({ dest: 'uploads/'});
export const MulterPictureUpload = multer({ dest: 'pictures/'});