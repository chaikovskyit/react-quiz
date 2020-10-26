// Формуємо набір потрібних функцій які ми будемо експортувати. Та зможемо їх імпортувати в тих компонентах яким вони потрібні

// приймає в себе конфігурацію і набір правил для валідації
export function createControl(config, validation) {
  // повертаємо обєкт який схожий з обєктом з Auth
  return {
    // розгортаєм обєкт конфігурації який ми сюди отримуємо, тут може бути велика кількість полів
    ...config,
    // передаємо обєкт validation  
    validation,
    // якщо ми передали набір параметрів валідації то значення valid буде "false", бо є набір правил
    valid: !validation,
    // 
    touched: false,
    // порожня стрічка
    value: ''
  }
}

// отримує "value" і правила для валідації
export function validate (value, validation = null) {
  // якщо у нас немає параметрів валідації то ми повертаємо true, а якщо ні то ми створюємо змінну isValid і в кінцевому результаті ми її повернемо
  if (!validation) {
    return true
  }
  // по замовчуванні
  let isValid = true
  // В <QuizCreator/> в нас тільки один параметр для валідації "required" тому в нас тільки одна перевірка
  if (validation.required){
    isValid = value.trim() !== '' && isValid
  }

  return isValid
  // Тепер ми експортуємо нашу функцію і мпортуємо її в компоненті <QuizCreator/>
}

// функція яка пробігається по обєкту "formControls" і перевіряє чи усі "control" валідні
export function validateForm(formControls) {
  let isFormValid = true

  for(let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid
    }
  }
  return isFormValid
}