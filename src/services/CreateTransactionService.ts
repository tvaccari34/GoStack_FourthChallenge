import TransactionsRepository, {
  TransactionDTO,
} from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: TransactionDTO): Transaction {
    const request = this.transactionsRepository.create({ title, value, type });
    return request;
  }
}

export default CreateTransactionService;
