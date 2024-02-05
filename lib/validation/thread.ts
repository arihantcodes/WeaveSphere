import * as z from 'zod';


export const ThreadValidation = z.object({
thread:z.string().nonempty().min(3,{message:"Min 3 Charracters"}).max(1000,{message:"Max 1000 Charracters"}),
accountId:z.string(),
});
export const CommentValidation = z.object({
thread:z.string().nonempty().min(3,{message:"Min 3 Charracters"}).max(1000,{message:"Max 1000 Charracters"}),

});