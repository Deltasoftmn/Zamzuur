'use client'

import styles from './FoodMenu.module.css'

export default function FoodMenu({ onBack }) {
  const menuCategories = [
    {
      id: 1,
      name: 'САЛАТ',
      items: [
        { name: 'Цезарь салат', price: '15,000₮', description: 'Анхны салат, тахианы мах, пармезан бяслаг' },
        { name: 'Грекийн салат', price: '12,000₮', description: 'Хулуу, улаан лооль, оливын тос' },
        { name: 'Капрезе салат', price: '14,000₮', description: 'Томато, моцарелла бяслаг, базилик' },
      ],
    },
    {
      id: 2,
      name: 'ГОЛ ХООЛ',
      items: [
        { name: 'Тахианы махтай паста', price: '18,000₮', description: 'Спагетти, тахианы мах, улаан лоольт соус' },
        { name: 'Гриль тахиа', price: '22,000₮', description: 'Гриль тахиа, хүнсний ногоо, будаа' },
        { name: 'Монгол махтай хоол', price: '25,000₮', description: 'Уламжлалт монгол мах, хүнсний ногоо' },
        { name: 'Лосось загас', price: '28,000₮', description: 'Гриль лосось, хүнсний ногоо, соус' },
      ],
    },
    {
      id: 3,
      name: 'ПИЦЦА',
      items: [
        { name: 'Маргарита пицца', price: '20,000₮', description: 'Томато соус, моцарелла, базилик' },
        { name: 'Пепперони пицца', price: '22,000₮', description: 'Пепперони, бяслаг, томато соус' },
        { name: '4 бяслагтай пицца', price: '24,000₮', description: '4 төрлийн бяслаг' },
      ],
    },
    {
      id: 4,
      name: 'УУХ ЗҮЙЛ',
      items: [
        { name: 'Кофе', price: '5,000₮', description: 'Эспрессо, Американо, Капучино' },
        { name: 'Цай', price: '4,000₮', description: 'Хар цай, ногоон цай, цагаан цай' },
        { name: 'Шинэ шүүс', price: '6,000₮', description: 'Жимсний шинэ шүүс' },
        { name: 'Софт ундаа', price: '3,000₮', description: 'Кока-кола, Пепси, Спрайт' },
      ],
    },
  ]

  return (
    <div className={styles.foodMenu}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          ← Буцах
        </button>
        <h1 className={styles.title}>МАНАЙ МЕНЮ</h1>
      </div>
      <div className={styles.container}>
        {menuCategories.map((category) => (
          <div key={category.id} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            <div className={styles.items}>
              {category.items.map((item, index) => (
                <div key={index} className={styles.menuItem}>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                  <div className={styles.itemPrice}>
                    <span className={styles.price}>{item.price}</span>
                    <button className={styles.addButton}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.cartSection}>
          <div className={styles.cartSummary}>
            <h3>Захиалга</h3>
            <p className={styles.cartEmpty}>Сагс хоосон байна</p>
          </div>
          <button className={styles.orderButton}>ЗАХИАЛАХ</button>
        </div>
      </div>
    </div>
  )
}
