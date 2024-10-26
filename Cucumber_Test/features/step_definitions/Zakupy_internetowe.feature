Feature: Zakup produktu

Scenario: Wyszukiwanie i zakup produktu z walidacją w koszyku
  Given Zakładając, że jestem na stronie głównej sklepu
    
  When klikam na wybrany produkt
    
  Then widzę produkt w koszyku
    
