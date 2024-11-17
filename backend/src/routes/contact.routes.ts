import { Router } from 'express'
import { contactsController } from '../controllers/contact.controller';


const conatctRoutes = Router();
const conatct = new contactsController();


conatctRoutes.get('/list', conatct.GetAllContacts);
conatctRoutes.post('/add-conatct', conatct.CreateContacts)
conatctRoutes.post('/update-contact/:id', conatct.UpdateContacts)
conatctRoutes.post('/delete-conatct/:id', conatct.HardDeleteContact)


export default conatctRoutes